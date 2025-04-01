export interface CustomTooltipProps {
    currentStep: CopilotStep;
    handleNext: () => void;
    handlePrev: () => void;
    handleStop: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}
