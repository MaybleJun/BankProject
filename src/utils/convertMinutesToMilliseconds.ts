export function convertMinutesToMilliseconds(minutes: number) {
    const SECONDS_PER_MINUTE = 60;
    const MILLISECONDS_PER_SECOND = 1000;
  
    const milliseconds = minutes * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
  
    return milliseconds;
}
