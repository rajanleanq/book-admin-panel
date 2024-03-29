export const getAudioDuration = ({ audioUrl, onSuccess, onError }: { audioUrl: string, onSuccess: (duration: string) => void, onError: (error: string) => void }) => {
    try {
        const audio = new Audio(audioUrl);
        audio.addEventListener('loadedmetadata', () => {
            const durationInSeconds = audio.duration;
            const minutes = Math.floor(durationInSeconds / 60);
            const seconds = Math.floor(durationInSeconds % 60);
            onSuccess(`${minutes}m:${seconds}s`)
        });
    } catch (error) {
        onError(`Error getting audio duration: ${error}`);
    }
}