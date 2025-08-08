import mongoose from "mongoose";

const classAssignments = [
  {
    name: "FY A",
    teachers: [
      "67e5422527831f5e26777a06",
      "67e5459861b13cc5749edbfd",
      "67e5459861b13cc5749edbfe",
      "67e5422527831f5e26777a0e",
      "67e5422527831f5e26777a0d",
      "67e5459861b13cc5749edbff",
    ],
  },
  {
    name: "FY B",
    teachers: [
      "67e5422527831f5e26777a06",
      "67e5422527831f5e26777a07",
      "67e5422527831f5e26777a08",
      "67e5422527831f5e26777a09",
      "67e5422527831f5e26777a0e",
      "67e5422527831f5e26777a0d",
      "67e5422527831f5e267779fd",
      "67e5422527831f5e26777a05",
    ],
  },
  {
    name: "FY C",
    teachers: [
      "67e5422527831f5e26777a06",
      "67e54749baa6d2737b3527b8",
      "67e54749baa6d2737b3527b9",
      "67e54749baa6d2737b3527ba",
      "67e54749baa6d2737b3527bb",
      "67e54749baa6d2737b3527bc",
      "67e5422527831f5e26777a0d",
      "67e54749baa6d2737b3527bd",
      "67e5459861b13cc5749edbff",
      "67e5422527831f5e267779fd",
    ],
  },
];

const generateClassData = async () => {
  return classAssignments.map((classData) => ({
    _id: new mongoose.Types.ObjectId(), // MongoDB ObjectId
    name: classData.name,
    teachers: classData.teachers.map((teacherId) => ({
      teacher: new mongoose.Types.ObjectId(teacherId), // Convert teacher IDs to ObjectId
      _id: new mongoose.Types.ObjectId(), // Ensure _id is ObjectId
    })),
    students: [],
    __v: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

export default generateClassData;
