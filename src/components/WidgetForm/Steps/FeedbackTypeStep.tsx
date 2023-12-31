import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedBackTypChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedBackTypChanged }: FeedbackTypeStepProps){
  return (
    <>
    <header>
    <span className="text-xl leading-6"> Deixe seu fedback</span>

    <CloseButton/>
  </header>


    <div className="flex py-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value])=>{
     return (
       <button
       key={key}
       className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
       onClick={()=> onFeedBackTypChanged(key as FeedbackType)}
       type="button"
       >
          <img src={value.Image.source} alt={value.Image.alt} />
          <span>{value.title}</span>
       </button>
     )
    }) }
 </div>
 </>
  )
}