class Student{
    public name:string;
    public rollno:number;
    public setData(getname:string, getrollno:number)
    {
        this.name=getname;
        this.rollno=getrollno;
    }
}
const s=new Student();
s.setData("Anish",24);
console.log(s);