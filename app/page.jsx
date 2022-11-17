"use client";
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import SearchInput from "./components/SearchInput";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <SearchInput getSearchResults={(result) => setCourses(result)} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
