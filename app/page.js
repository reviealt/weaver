"use client";
import React, { useState, useEffect } from "react";
import WaveBackground from "./_components/WaveBackground";
import { useRouter } from 'next/navigation';

function InitialPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [file, setFile] = useState("");
  const { push } = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenNewProjectModal = () => {
    push("/project/new");
  }
  const handleOpenExistingProjectRedirect = (e) => {
    push("project/");
    event.preventDefault();
  }




  return (
    <main className="overflow-hidden relative mx-auto w-screen max-w-none h-screen max-md:h-screen max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <nav
        className="flex absolute inset-x-0 top-0 z-10 justify-between items-center px-12 py-6 max-md:px-6 max-md:py-4 max-sm:px-4 max-sm:py-3"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex gap-8 items-center max-md:gap-4 max-sm:gap-3 text-zinc-400 leading-relaxed">
          weaver
        </div>
      </nav>

      <section
        className="flex absolute top-2/4 left-2/4 flex-col gap-10 items-center text-center transition-all -translate-x-2/4 -translate-y-2/4 duration-[1s] ease-[ease] z-[5] max-md:gap-8 max-sm:gap-5 max-sm:px-4 max-sm:py-0"
        style={{
          opacity: isVisible ? "1" : "0",
        }}
        aria-live="polite"
      >

        <p className="m-0 text-xl leading-relaxed max-w-[600px] text-zinc-400 hover:underlined ">
          weave organized, clean databases and deploy without a worry.
        </p>

        <div className="flex gap-6 mt-5 max-sm:flex-col max-sm:gap-4 max-sm:w-full">
          <button onClick={handleOpenNewProjectModal} className="text-base leading-relaxed text-zinc-600">
            {">"} start new project 
          </button>
          <form>
            <label className="text-base leading-relaxed text-zinc-600"> {">"} open an existing project</label>
              <input type="file" id="projectFile" onClick={handleOpenExistingProjectRedirect} className=""></input>
          </form>
        </div>

      </section>

      <WaveBackground />
    </main>
  );
}

export default InitialPage;
