"use client";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { Copy, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LOCAL_STORAGE_KEY = "shortUrls";

const InputUrlCard = () => {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState<string[]>([]);
  const { toast } = useToast();

  // Load URLs from localStorage on component mount (client-side only)
  useEffect(() => {
    const savedUrls = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedUrls) {
      setShortUrls(JSON.parse(savedUrls));
    }
  }, []);

  // Save URLs to localStorage whenever shortUrls changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shortUrls));
  }, [shortUrls]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        "https://shrtlnk.dev/api/v2/link",
        { url: url },
        {
          headers: {
            "api-key": "POm4XTlcAZ0skftDHegTDUpW119IPQIxNEK1WNi6o4P3r",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setShortUrls((prevUrls) => [...prevUrls, res.data.shrtlnk]);
        toast({ description: "URL shortened successfully" });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error",
          description: "Failed to shorten URL",
          variant: "destructive",
        });
      });
    setUrl("");
  };

  const handleCopy = (urlToCopy: string) => {
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        toast({ description: "URL copied to clipboard" });
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast({
          title: "Error",
          description: "Failed to copy URL",
          variant: "destructive",
        });
      });
  };

  const handleDelete = (indexToDelete: number) => {
    setShortUrls((prevUrls) =>
      prevUrls.filter((_, index) => index !== indexToDelete)
    );
    toast({ description: "URL deleted successfully" });
  };

  return (
    <form
      className="flex flex-col gap-2 mt-6 w-full justify-center"
      onSubmit={handleOnSubmit}
    >
      <div className="flex flex-row gap-2 w-full justify-center">
        <Input
          className="focus-visible:ring-[none] xl:w-[30%] lg:w-[60%] w-[60%] hover:border-primary focus:border-primary duration-300 ease-in-out"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit">Convert!</Button>
      </div>
      <div className="flex flex-col gap-2 mt-1 w-full items-center">
        {shortUrls.map((shortUrl, index) => (
          <div
            key={index}
            className="flex flex-row font-medium justify-between py-2 px-3 bg-primary xl:w-[35%] md:w-[70%] lg:w-[70%] w-[78%] rounded-md text-[#0C0A09]"
          >
            <a
              href={shortUrl}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
            <div className="flex gap-2">
              <Copy
                className="cursor-pointer"
                onClick={() => handleCopy(shortUrl)}
              />
              <Trash2
                className="cursor-pointer"
                onClick={() => handleDelete(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default InputUrlCard;
