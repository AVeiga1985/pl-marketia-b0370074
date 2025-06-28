
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Scissors } from "lucide-react";

interface SuccessCase {
  icon: React.ElementType;
  company: string;
  segment: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  highlight: string;
  color: string;
}

interface ExpandableSuccessCasesProps {
  cases: SuccessCase[];
}

export default function ExpandableSuccessCases({ cases }: ExpandableSuccessCasesProps) {
  const [active, setActive] = useState<SuccessCase | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.company}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:top-8 lg:right-8 items-center justify-center bg-white rounded-full h-8 w-8 hover:bg-gray-100 transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            
            <motion.div
              layoutId={`card-${active.company}-${id}`}
              ref={ref}
              className="w-full max-w-4xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-black/90 backdrop-blur-lg border border-gray-800 rounded-3xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-6 p-8 border-b border-gray-800">
                <div className={`bg-gradient-to-r ${active.color} p-4 rounded-2xl`}>
                  <active.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <motion.h3
                    layoutId={`title-${active.company}-${id}`}
                    className="text-2xl font-light text-white mb-2"
                  >
                    {active.company}
                  </motion.h3>
                  <motion.p
                    layoutId={`segment-${active.segment}-${id}`}
                    className="text-gray-400 font-light"
                  >
                    {active.segment}
                  </motion.p>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-8">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Challenge */}
                  <div>
                    <h4 className="text-red-400 font-light mb-4 text-xl">Desafio:</h4>
                    <p className="text-gray-300 leading-relaxed font-light">{active.challenge}</p>
                  </div>
                  
                  {/* Solution */}
                  <div>
                    <h4 className="text-blue-400 font-light mb-4 text-xl">Solução MarketIA:</h4>
                    <p className="text-gray-300 leading-relaxed font-light">{active.solution}</p>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h4 className="text-green-400 font-light mb-6 text-xl">Resultados:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {active.results.map((result, index) => (
                        <div key={index} className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                          <span className="text-white font-light">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gray-800/20 rounded-xl p-6 border border-gray-700">
                    <p className="text-gray-300 italic leading-relaxed mb-4 font-light">"{active.testimonial}"</p>
                    <p className="text-gray-400 font-light">— {active.author}</p>
                  </div>
                  
                  {/* Highlight */}
                  <div className={`bg-gradient-to-r ${active.color} p-6 rounded-2xl text-center`}>
                    <div className="text-3xl font-thin text-white mb-2">{active.highlight}</div>
                    <div className="text-white/80 font-light">Redução no Tempo de Espera</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
        {cases.map((case_, index) => (
          <motion.div
            layoutId={`card-${case_.company}-${id}`}
            key={`card-${case_.company}-${id}`}
            onClick={() => setActive(case_)}
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/50 transition-all duration-700 cursor-pointer group hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className={`bg-gradient-to-r ${case_.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                <case_.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <motion.h3
                  layoutId={`title-${case_.company}-${id}`}
                  className="text-2xl font-light text-white mb-2"
                >
                  {case_.company}
                </motion.h3>
                <motion.p
                  layoutId={`segment-${case_.segment}-${id}`}
                  className="text-gray-400 font-light"
                >
                  {case_.segment}
                </motion.p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed font-light line-clamp-3">{case_.challenge}</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className={`bg-gradient-to-r ${case_.color} px-4 py-2 rounded-xl`}>
                <span className="text-white font-medium">{case_.highlight}</span>
              </div>
              <motion.button
                layoutId={`button-${case_.company}-${id}`}
                className="px-6 py-2 text-sm rounded-full font-medium bg-gray-800 hover:bg-red-500 hover:text-white text-gray-300 transition-all duration-300"
              >
                Ver Detalhes
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
