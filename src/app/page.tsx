"use client";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [paintURL, setPaintURL] = useState("");
  const [isFetchingPaint, setFetchingPaint] = useState("");

  useEffect(() => {
    const fetchTimestamp = async () => {
      const response = await fetch('/api/timer');
      const data = await response.json();

      if (data.timestamp) {
        const currentTime = Date.now();
        const remainingTime = Math.max(0, Math.floor((data.timestamp - currentTime) / 1000));
        setTimeLeft(remainingTime);
      }

      if (data.currentlyPaint) {
        setFetchingPaint(data.currentlyPaint);
      }
    };

    fetchTimestamp();

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          resetTimer();
          return 3600;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const resetTimer = async () => {
    try {
      const response = await axios('/api/timer', { method: 'POST' });

      if (response.data.currentlyPaint) {
        fetchPaint(isFetchingPaint);
      }
    } catch (error) {
      console.error('Failed to reset timer:', error);
    }
  };

  useEffect(() => {
    if (isFetchingPaint) {
      fetchPaint(isFetchingPaint);
    }
  }, [isFetchingPaint])

  const fetchPaint = async (id: string) => {
    try {
      const request = await axios('/api/paint', { method: 'POST', data: JSON.stringify({ paintID: id }) });

      setPaintURL(request.data.thumbnail.href);
    } catch (error) {
      console.error('Failed to fetch paint:', error);
    }
  }

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center py-10 gap-10">
        <span className="text-6xl font-bold text-pretty w-max">
          {formatTime(timeLeft)}
        </span>
        {paintURL ? (
          <Image src={paintURL} width={500} height={500} alt="paint" className="frame" />
        ) : (
          <Skeleton className="w-[500px] h-[350px]" />
        )}
      </div>
    </div>
  );
}