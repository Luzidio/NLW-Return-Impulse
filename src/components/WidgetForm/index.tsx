import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",  
    Image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: "Ideia", 
    Image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    },
  },
  OTHER: {
    title: "Outro", 
    Image: {
      source: thoughImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    },
  }, 
}

 export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState <FeedbackType | null> (null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     

        {! feedbackType ? (
          <FeedbackTypeStep onFeedBackTypChanged={setFeedbackType}/>
        ): (
         <FeedbackContentStep/>
        )}

      <footer className="text-xs text-neutral-400">
      © 2023 ♥ <a className="underline underline-offset-2" href="https://github.com/Luzidio">Luzidio</a>
      </footer>

    </div>
  )
}