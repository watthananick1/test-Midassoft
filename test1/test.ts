function getClockAngle(hh_mm: string): string {
    const [hours, minutes] = hh_mm.split(":").map(Number);
    
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = minutes * 6;

    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
        angle = 360 - angle;
    }

    return `getClockAngle(${hh_mm}) === ${angle}`;
}

export { getClockAngle };
