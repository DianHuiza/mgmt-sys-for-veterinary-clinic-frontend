import { Button } from '../Buttons'
import { SmallSimpleLoader } from '../Loaders/SmallSimpleLoader'

interface SubmitButtonProps {
  label: string
  isSubmitting: boolean
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label, isSubmitting = false }) => {
  return (
    <Button className='w-full bg-caribbean-current text-white' >
      { isSubmitting ? <SmallSimpleLoader /> : label }
    </Button>
  )
}