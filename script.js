class ArrayList{

constructor(){
this.list = [];
}
push(item){
    this.list[this.list.length]=item;
    return this.list;
     
}

 pop(){
   // return  this.list[this.list.lenght] =this.list.;
   this.list[this.list.length-1]= {} ;
   return this.list;
 }

addfirst(item){
    return   this.list.unshift(item);
}

removefirst(){
    return   this.list.shift()
}

}
