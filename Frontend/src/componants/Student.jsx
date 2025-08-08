import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/student.css"

const Student = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacherId, setSelectedTeacherId] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [question, setQuestion] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reportLoading, setReportLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/feedback/teachers", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setTeachers(response.data.teachers);
            } catch (err) {
                console.error("Error fetching teachers:", err);
                setError("Failed to load teachers");
            }
        };

        fetchTeachers();
    }, []);

    useEffect(() => {
        if (selectedTeacherId) {
            const teacherObj = teachers.find(t => t.teacher._id === selectedTeacherId)?.teacher;
            setSelectedTeacher(teacherObj);
            setCurrentIndex(0);
            setQuestion(null);
            setSelectedOption(null);
            setError(null);
        }
    }, [selectedTeacherId, teachers]);

    useEffect(() => {
        if (selectedTeacher) {
            fetchQuestion(currentIndex);
        }
    }, [selectedTeacher, currentIndex]);

    const fetchQuestion = async (index) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:5000/feedback/question/${index}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setQuestion(response.data.question);
            setTotalQuestions(response.data.total);
            setSelectedOption(null);
            setError(null);
        } catch (err) {
            console.error("Error fetching question:", err);
            setError("Failed to load question");
        } finally {
            setLoading(false);
        }
    };

    const getOptionLetter = (options, selectedText) => {
        const index = options.findIndex(opt => opt.text === selectedText);
        return index !== -1 ? String.fromCharCode(65 + index) : null; 
    };

    const getWeight = (letter) => {
        const weights = { A: 10, B: 8, C: 6, D: 4 };
        return weights[letter] || 0;
    };

    const handleSubmit = async () => {
        if (!selectedOption) {
            setError("Please select an option");
            return;
        }

        const selectedLetter = getOptionLetter(question.options, selectedOption.text);

        if (!selectedLetter) {
            setError("Invalid option selected");
            return;
        }

        const payload = {
            teacherId: selectedTeacher._id,
            questionId: question._id,
            selected_option: selectedLetter,
            option_label: selectedOption.text,
            weight: getWeight(selectedLetter),
        };

        console.log("Submitting feedback:", payload); 

        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "http://localhost:5000/feedback/submit",
                payload,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setError(null);

            if (currentIndex < totalQuestions - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                alert("Feedback submitted successfully!");
                navigate("/student-dashboard");
            }
        } catch (err) {
            console.error("Error submitting feedback:", err);
            setError("Failed to submit feedback");
        }
    };

    return (
        <div className="student-dashboard">
            <h2>Student Dashboard</h2>

            {!selectedTeacher ? (
                <div>
                    <h3>Select a Teacher</h3>
                    {teachers.length === 0 ? (
                        <p>No teachers assigned to your class</p>
                    ) : (
                        <select onChange={(e) => setSelectedTeacherId(e.target.value)} value={selectedTeacherId}>
                            <option value="">Select a Teacher</option>
                            {teachers.map((teacher) => (
                                <option key={teacher.teacher._id} value={teacher.teacher._id}>
                                    {teacher.teacher.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ) : (
                <div>
                    <h3>Teacher: {selectedTeacher.name}</h3>
                </div>
            )}

            {selectedTeacher && question && (
                <div className="question-container">
                    <h4>Question {currentIndex + 1} of {totalQuestions}</h4>
                    <p>{question.question}</p>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value={option.text}
                                        checked={selectedOption?.text === option.text}
                                        onChange={() => setSelectedOption(option)}
                                    />
                                    {option.text}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <div className="buttons">
                        {currentIndex > 0 && <button onClick={() => setCurrentIndex(currentIndex - 1)}>Previous</button>}
                        <button onClick={handleSubmit}>{currentIndex < totalQuestions - 1 ? "Next" : "Submit"}</button>
                    </div>

                    {error && <p className="error">{error}</p>}
                </div>
            )}
        </div>
    );
};

export default Student;
