import {TextEffect} from '@/components/ui/text-effect';


export default function TextEffectPerLine({text}: { text: string }) {
    return (
        <TextEffect
            per='line'
            as='p'
            segmentWrapperClassName='overflow-hidden block'
            variants={{
                container: {
                    hidden: {opacity: 0},
                    visible: {
                        opacity: 1,
                        transition: {staggerChildren: 0.2},
                    },
                },
                item: {
                    hidden: {
                        opacity: 0,
                        y: 40,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.4,
                        },
                    },
                },
            }}
        >
            {text}
        </TextEffect>
    );
}