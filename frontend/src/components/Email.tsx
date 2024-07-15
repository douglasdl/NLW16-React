import { X } from "lucide-react";

interface EmailProps {
  email: string
  onClose: () => void
}

export function Email({ email, onClose }: EmailProps) {
  return (
    <div className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
      <span className='text-zinc-300 flex items-center gap-2'>
        { email }
        <button onClick={onClose}>
          <X className='size-4 text-zinc-400' />
        </button>
      </span>
    </div>
  )
}