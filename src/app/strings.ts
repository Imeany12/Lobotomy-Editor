
interface String {
    replace_fr(s: string, replacement: string): string;
}




String.prototype.replace_fr = function (target: string, replacement: string): string {
    const pattern = new RegExp(`\\b${target}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');

    let txt = this.replace(pattern, replacement + "SKIBIDIPLACEHOLDER");
    // backward

    const specialchar = ['+', '*', '!', '.', "|"];
    let reps = replacement.split('');
    reps.forEach((element) => {
        if (specialchar.includes(element)) {
            let index = reps.indexOf(element);
            reps[index] = '\\' + element;
        }
    });


    if (replacement.length == 1) {
        const p2 = new RegExp(`(?<![${reps.join('')}])${reps.join('')}(?![${reps.join('')}])`, 'g');
        txt = txt.replace(p2, target);   
    }
    else{
        let p2 = new RegExp(`\\b${reps.join('')}\\b(?=(?:(?:[^"]*"){2})*[^"]*$)`, 'g');
        if (specialchar.includes(replacement.charAt(0))) {
            p2 = new RegExp(`(?<![${reps.join('')}])${reps.join('')}`, 'g');
        }
        
        if (txt.match(p2)?.join()   ) {
            console.log(target)
            txt = txt.replace(p2, target);
        }
    }
    return txt.replace("SKIBIDIPLACEHOLDER", "");


}
