import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../SideBar/AdminSideBar.jsx";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const [question, setQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // for question fetch
  const [reportLoading, setReportLoading] = useState(false); // reserved if needed
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const navigate = useNavigate();

  // Normalize teachers data to a consistent shape: [{ _id, name, ... }]
  const normalizeTeachers = (rawTeachers) => {
    if (!Array.isArray(rawTeachers)) return [];
    return rawTeachers
      .map((t) => {
        // Accept either { teacher: {...} } or direct teacher object
        const teacherObj = t?.teacher ?? t;
        if (!teacherObj || !teacherObj._id) return null;
        return teacherObj;
      })
      .filter(Boolean);
  };

  // Fetch teachers once on mount
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/feedback/teachers", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const clean = normalizeTeachers(response?.data?.teachers ?? []);
        setTeachers(clean);
        setError(null);
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Failed to load teachers");
        setTeachers([]);
      }
    };

    fetchTeachers();
  }, []);

  // When selectedTeacherId changes, set selectedTeacher and reset relevant state
  useEffect(() => {
    if (selectedTeacherId) {
      const teacherObj = teachers.find((t) => t?._id === selectedTeacherId) || null;
      setSelectedTeacher(teacherObj);
      setCurrentIndex(0);
      setQuestion(null);
      setSelectedOption(null);
      setError(null);
      setIsNextDisabled(true);
    } else {
      setSelectedTeacher(null);
      setCurrentIndex(0);
      setQuestion(null);
      setSelectedOption(null);
      setIsNextDisabled(true);
    }
  }, [selectedTeacherId, teachers]);

  const fetchQuestion = useCallback(
    async (index) => {
      if (!selectedTeacher) return;
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/feedback/question/${index}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setQuestion(response?.data?.question ?? null);
        setTotalQuestions(response?.data?.total ?? 0);
        setSelectedOption(null);
        setError(null);
        // Disable Next/Submit until user makes a choice
        setIsNextDisabled(true);
      } catch (err) {
        console.error("Error fetching question:", err);
        setError("Failed to load question");
        setQuestion(null);
      } finally {
        setLoading(false);
      }
    },
    [selectedTeacher]
  );

  // Fetch a question whenever the teacher or currentIndex changes
  useEffect(() => {
    if (selectedTeacher) {
      fetchQuestion(currentIndex);
    }
  }, [selectedTeacher, currentIndex, fetchQuestion]);

  const getOptionLetter = (options, selectedText) => {
    const index = options.findIndex((opt) => opt.text === selectedText);
    return index !== -1 ? String.fromCharCode(65 + index) : null;
  };

  const getWeight = (letter) => {
    const weights = { A: 10, B: 8, C: 6, D: 4 };
    return weights[letter] || 0;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsNextDisabled(false);
  };

  const handleSubmit = async () => {
    if (!selectedOption || !question || !selectedTeacher) {
      setError("Please select an option");
      return;
    }

    setIsNextDisabled(true);

    const selectedLetter = getOptionLetter(question.options || [], selectedOption.text);

    if (!selectedLetter) {
      setError("Invalid option selected");
      setIsNextDisabled(false);
      return;
    }

    const payload = {
      teacherId: selectedTeacher._id,
      questionId: question._id,
      selected_option: selectedLetter,
      option_label: selectedOption.text,
      weight: getWeight(selectedLetter),
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/feedback/submit", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setError(null);

      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        alert("Feedback submitted successfully!");
        navigate("/student-dashboard");
      }
    } catch (err) {
      console.error("Error submitting feedback:", err);
      setError("Failed to submit feedback");
      // Re-enable button so user can retry
      setIsNextDisabled(false);
    }
  };

  return (
    <>
      <section>
        <div className="grid md:grid-cols-6 grid-cols-1 p-2">
          <div>
            <AdminSideBar />
          </div>

          <div className="md:col-span-5">
            <div className="student-dashboard md:px-10 z-20">
              <h2 className="dashboard-title pt-10 text-4xl text-[#dc2626] font-bold flex justify-center items-center">
                Student Feedback
              </h2>

              {!selectedTeacher ? (
                <div className="teacher-selection">
                  <h3 className="teacher-selection-title flex justify-center items-center py-4 text-2xl font-semibold">
                    Select a Teacher
                  </h3>

                  {teachers.length === 0 ? (
                    <p className="no-teachers">No teachers assigned to your class</p>
                  ) : (
                    <div className="flex justify-center items-center">
                      <select
                        className="border-2 border-gray-400 rounded-lg py-2 px-4"
                        onChange={(e) => setSelectedTeacherId(e.target.value)}
                        value={selectedTeacherId}
                      >
                        <option value="">Select a Teacher</option>
                        {teachers.map((t) => (
                          <option key={t._id} value={t._id}>
                            {t.name || "Unnamed"}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              ) : (
                <div className="selected-teacher">
                  <h3 className="selected-teacher-title flex justify-center items-center text-xl py-2 font-semibold">
                    Teacher: {selectedTeacher?.name ?? "Unnamed"}
                  </h3>
                </div>
              )}

              {selectedTeacher && (
                <div className="question-container border-2 border-gray-400 rounded-2xl py-6 px-10 my-14 shadow-2xl bg-[#d0c5c586]">
                  <h4 className="question-number font-bold text-lg py-4">
                    {loading
                      ? "Loading question..."
                      : `Question ${Math.min(currentIndex + 1, totalQuestions)} of ${totalQuestions}`}
                  </h4>

                  {!loading && question ? (
                    <>
                      <p className="question-text font-bold pb-3 text-lg">{question.question}</p>
                      <ul className="options-list">
                        {(question.options || []).map((option, index) => (
                          <li key={index} className="option-item mt-2">
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="option"
                                value={option.text}
                                checked={selectedOption?.text === option.text}
                                onChange={() => handleOptionSelect(option)}
                              />
                              <p>{option.text}</p>
                            </label>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-end items-end">
                        <div>
                          <button
                            className={`md:px-24 px-10 bg-[#dc2626] text-white rounded-2xl py-2 font-bold ${
                              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            onClick={handleSubmit}
                            disabled={isNextDisabled}
                          >
                            {currentIndex < (totalQuestions - 1) ? "Next" : "Submit"}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {error && <p className="error-message text-red-500 font-bold mt-4">{error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
