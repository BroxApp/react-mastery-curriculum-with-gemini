
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {wizardSchema} from "../schemas/wizardSchemas";
import {useState} from "react";
import { Step1Personal } from "./Step1Personal";
import { Step2Account } from "./Step2Personal";
import { Step3Summary } from "./Step3Summary";

export function MultiStepWizard(){
    const [currentStep, setCurrentStep] = useState(1);

    const{
        register,
        handleSubmit,
        trigger,
        watch,
        formState: {errors, isSubmitting},
    } = useForm ({
        resolver: zodResolver (wizardSchema),
        mode: "onTouched",
    });

    const nextStep = async () => {
    if (currentStep === 1) {
        const isStepValid = await trigger(["fullName", "email"]);

        if (isStepValid) {
            setCurrentStep((prev) => prev + 1);
        }
    }

    if (currentStep === 2) {
        const isStepValid = await trigger([
            "role",
            "password",
            "confirmPassword",
        ]);

        if (isStepValid) {
            setCurrentStep((prev) => prev + 1);
        }
    }

    };

    const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = (data) => {
        console.log("اطلاعات نهایی فرم:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Multi-Step-Form Wizard</h1>

        {currentStep === 1 && (
            <Step1Personal
                register={register}
                errors={errors}
                onNext={nextStep}
            />
        )}

        {currentStep === 2 && (
            <Step2Account
                register={register}
                errors={errors}
                onNext={nextStep}
                onPrev={prevStep}
            />
        )}

        {currentStep === 3 && (
        <Step3Summary
            register={register}
            errors={errors}
            watch={watch}
            onPrev={prevStep}
            isSubmitting={isSubmitting}
        />
        )}
        </form>
    );
}