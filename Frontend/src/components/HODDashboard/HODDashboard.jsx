import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hod.css";
import AdminSideBar from "../SideBar/AdminSideBar";

export default function HODDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized: Please log in again.");
          return;
        }

        const res = await axios.get("https://feeback-systeam.onrender.com/hod/teachers", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setTeachers(res.data.teachers);
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Failed to fetch teachers. Please try again.");
      }
    };

    fetchTeachers();
  }, []);

  const fetchFeedback = async () => {
    if (!selectedTeacher) {
      alert("Please select a teacher first!");
      return;
    }
    
    setLoading(true);
    setFeedback({}); // Clear previous feedback
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized: Please log in again.");
        return;
      }

      const res = await axios.get(
        `https://feeback-systeam.onrender.com/hod/feedback/${selectedTeacher._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      setFeedback(res.data.feedbackReports || {});
    } catch (err) {
      console.error("Error fetching feedback:", err);
      setError("Failed to fetch feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateTeacherReport = async () => {
    if (!selectedTeacher || !selectedTeacher._id) {
      alert("Please select a valid teacher before generating a report.");
      return;
    }

    try {
      setReportLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `https://feeback-systeam.onrender.com/report/docx?teacher=${selectedTeacher._id}`, 
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${selectedTeacher.name}_feedback.docx`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url); // Free memory
    } catch (error) {
      console.error("Error generating DOCX:", error);
      alert("Failed to generate DOCX report.");
    } finally {
      setReportLoading(false);
    }
  };

  return (
    <section>
      <div className="grid md:grid-cols-6 grid-cols-1 p-2">
        <div>
          <AdminSideBar />
        </div>

        <div className="md:col-span-5">
          <div className="w-full xl:px-20 px-6">
            <h1 className="text-[#dc2626] flex justify-center items-center font-bold text-4xl">
              HOD Dashboard
            </h1>

            <div className="flex flex-col justify-center items-center gap-3 py-2">
              <div className="flex justify-center items-center gap-4">
                <label className="font-semibold">Select Teacher:</label>
                <select
                  className="border-2 border-gray-300 rounded-sm py-1"
                  value={selectedTeacher?._id || ""}
                  onChange={(e) => {
                    const teacher = teachers.find((t) => t._id === e.target.value);
                    setSelectedTeacher(teacher || null);
                  }}
                >
                  <option value="">-- Select --</option>
                  {teachers.map((teacher) => (
                    <option key={teacher._id} value={teacher._id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={fetchFeedback}
                className="py-2 bg-[#dc2626] text-white w-full rounded-2xl"
                disabled={!selectedTeacher || loading}
              >
                {loading ? "Loading..." : "Get Feedback"}
              </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="overflow-y-auto h-[65vh]">
              {loading ? (
                <p className="text-center">Loading feedback...</p>
              ) : Object.entries(feedback).length > 0 ? (
                Object.entries(feedback).map(([className, feedbackData]) => (
                  <div key={className} className="overflow-auto">
                    <h2 className="text-[#dc2626] font-semibold pt-6">{className} Feedback</h2>
                    <table>
                      <thead>
                        <tr>
                          <th>Question</th>
                          <th>Option A</th>
                          <th>Option B</th>
                          <th>Option C</th>
                          <th>Option D</th>
                          <th>Average Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feedbackData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.question}</td>
                            <td>{item.optionA}</td>
                            <td>{item.optionB}</td>
                            <td>{item.optionC}</td>
                            <td>{item.optionD}</td>
                            <td>{item.averageScore}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              ) : (
                <p className="text-center">No feedback available.</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              {selectedTeacher && (
                <button
                  className="py-2 mt-4 bg-white border-2 border-red-600 px-10 rounded-2xl hover:bg-red-600 hover:text-white transition"
                  onClick={generateTeacherReport}
                  disabled={reportLoading}
                >
                  {reportLoading ? "Generating Report..." : "Generate Teacher Report"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
