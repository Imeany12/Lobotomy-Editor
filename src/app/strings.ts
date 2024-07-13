
interface String {
    replace_fr(s: string, replacement: string): string;
}

String.prototype.replace_fr = function (target: string, replacement: string): string {
    const pattern = new RegExp(`\\b${target}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');
    
    return this.replace(pattern, replacement);
}
