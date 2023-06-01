const pickFromBothSide = (A, B) => {
        let minB = 0;
        
        const getTotal = (s,e) =>  {
            let total = 0;
            for(let i = s; i < s + e;  i++) {
                total += A[i];
            }
            return total;
        }
        
        for(let  i = 0; i < A.length; i++) {
            if(i + A.length - B < A.length) {
                minB = Math.min(getTotal(i, A.length - B), minB);
            }
        }
        
        return A.reduce((acc, curr) => {
           return acc + curr; 
        },0) - minB;
}

const A = [ -533, -666, -500, 169, 724, 478, 358, -38, -536, 
            705, -855, 281, -173, 961, -509, -5, 942, -173, 
            436, -609, -396, 902, -847, -708, -618, 421, -284, 
            718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 
            35, 894, -297, 811, 322, -667, 673, -336, 141, 711, 
            -747, -132, 547, 644, -338, -243, -963, -141, -277, 
            741, 529, -222, -684, 35 ];
const B = 48

// const A = [5, -2, 3 , 1, 2];
// const B = 3;
console.log(pickFromBothSide(A, B));