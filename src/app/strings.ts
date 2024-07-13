
interface String {
    replace_fr(s: string, replacement: string): string;
}




String.prototype.replace_fr = function (target: string, replacement: string): string {
    const placeholder = `d33zNutz`;
    // const placeholder = " when jimmy first told me about deeznut"


    let specialchar = ['+', '*', '.', "|"];
    let reps = replacement.split('');
    reps.forEach((element) => {
        if (specialchar.includes(element)) {
            let index = reps.indexOf(element);
            reps[index] = '\\' + element;
        }
    });


    let txt = this;
    if (replacement.length == 1) {
        const ban = "\\" + specialchar.join("\\") + "=/";
        const p2 = new RegExp(`(?<![!${ban}])${reps.join('')}(?![${ban}])`, 'g');
        txt = txt.replace(p2, target + placeholder);       
    }
    else{
        let p2 = new RegExp(`${reps.join('')}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');
        specialchar = ['+', '*', '.', "|", "!", "=", "\\", "-", "/"];
        if (specialchar.includes(replacement.charAt(0))) {
            p2 = new RegExp(`${reps.join('')}`, 'g');
        }
        
        if (txt.match(p2)?.join()   ) {
            txt = txt.replace(p2, target + placeholder);
        }
    }

    const pattern = new RegExp(`\\b${target}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');

    txt = txt.replace(pattern, replacement);
    return txt.replace(placeholder, "");


}
