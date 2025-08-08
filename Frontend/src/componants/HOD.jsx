import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/hod.css";

const HOD = () => {
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

        const res = await axios.get("http://localhost:5000/hod/teachers", {
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
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized: Please log in again.");
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/hod/feedback/${selectedTeacher._id}`,
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
        `http://localhost:5000/report/docx?teacher=${selectedTeacher._id}`, 
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
    } catch (error) {
      console.error("Error generating DOCX:", error);
      alert("Failed to generate DOCX report.");
    } finally {
      setReportLoading(false);
    }
  };

  return (
    <div className="hod-container">
      <h1>HOD Dashboard</h1>

      <div className="filter-section">
        <label>Select Teacher:</label>
        <select
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
        <button onClick={fetchFeedback} disabled={!selectedTeacher || loading}>
          {loading ? "Loading..." : "Get Feedback"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {Object.entries(feedback).length > 0 ? (
        Object.entries(feedback).map(([className, feedbackData]) => (
          <div key={className} className="feedback-section">
            <h2>{className} Feedback</h2>
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
        <p>No feedback available.</p>
      )}

      {selectedTeacher && (
        <button
          className="report-btn"
          onClick={generateTeacherReport}
          disabled={reportLoading}
        >
          {reportLoading ? "Generating Report..." : "Generate Teacher Report"}
        </button>
      )}
    </div>
  );
};

export default HOD;
