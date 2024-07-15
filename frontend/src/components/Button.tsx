import { ArrowRight, Plus } from "lucide-react";

interface ButtonProps {
  title: string
  icon: "plus" | "arrow-right"
}

export function Button({ title, icon }: ButtonProps) {
  return (
    <button 
      className='flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'
    >
      { title }
      { icon === "plus" && <Plus className='size-5' /> }
      { icon === "arrow-right" && <ArrowRight className='size-5' /> }
    </button>
  )
}