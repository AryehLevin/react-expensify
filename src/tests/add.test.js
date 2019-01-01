const add = (a,b) => a+b;
const generateGreening= (name ='Anonymous') => `Hello ${name} !`;

test('should add two numbers',() =>{
    const result = add(3,4);
    expect(result).toBe(7);
   // if (result !==7){
   //     throw new Error(`you added 4 and 3 the result was ${result} expected 7`)
   // } 
});

test('should return a greeting',() =>{
    const mygreeting = generateGreening('Mike');
    expect(mygreeting).toBe('Hello Mike !');
 });

 test('should generate greeting for no name',() =>{
    const mygreeting = generateGreening();
    expect(mygreeting).toBe('Hello Anonymous !');
 });