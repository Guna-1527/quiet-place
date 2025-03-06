"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

// Define the type for leaderboard entries
type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
};

const Leaderboard = () => {
  // Explicitly define state type as an array of LeaderboardEntry
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      let { data, error } = await supabase
        .from("leaderboard")
        .select("*")
        .order("score", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setLeaderboard(data as LeaderboardEntry[]); // Explicitly cast data to the defined type
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      {leaderboard.map((user, index) => (
        <div key={user.id} className="p-4 border">
          <h2>
            {index + 1}. {user.name}
          </h2>
          <p>Score: {user.score}</p>
        </div>
      ))}
    </div>
  );
}


export default Leaderboard;