"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

// Define the type for a quiz entry
type Quiz = {
  id: string;
  title: string;
  description: string;
};

const AvailableQuizzes = () => {
  // Explicitly define state type as an array of Quiz objects
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      let { data, error } = await supabase.from("quizzes").select("*");

      if (error) {
        console.error(error);
      } else {
        setQuizzes(data as Quiz[]); // Explicitly cast data to the defined type
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Available Quizzes</h1>
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="p-4 border">
          <h2>{quiz.title}</h2>
          <p>{quiz.description}</p>
          <button
            onClick={() => (window.location.href = `/quiz/${quiz.id}`)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Start Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default AvailableQuizzes;
