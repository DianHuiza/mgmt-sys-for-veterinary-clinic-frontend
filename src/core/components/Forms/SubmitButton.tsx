import { Button } from '../Buttons'
import { SmallSimpleLoader } from '../Loaders/SmallSimpleLoader'

interface SubmitButtonProps {
  label: string
  isSubmitting: boolean
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label, isSubmitting }) => {
  return (
    <Button>
      { isSubmitting ? <SmallSimpleLoader /> : label }
    </Button>
  )
}