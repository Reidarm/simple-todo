
//setitem, and getitem
//
interface itemType {
  completed: boolean;
  text: string;
}
function saveItem(type:string, item:string){
  localStorage.removeItem(type);
  localStorage.setItem(type, item);
}
function addItem(type: string, item:itemType){
  //assuming if added again(already exists) it is to update so we do a upsert
  console.log("hello");
  const info: string| null = localStorage.getItem(type);
  const val = (info ? JSON.parse(info): []);
  console.log(info);

  val.push(item);
  //localStorage.setItem(type, JSON.stringify(val));
  saveItem(type, JSON.stringify(val));
  return item;
}

function deleteItem(type: string, item:itemType){
  //item is suppose to be a identifier
  const info: string| null = localStorage.getItem(type);
  const val = (info ? JSON.parse(info): []);
  if (val){
    val.splice(val.indexOf(item));
  }
  saveItem(type, JSON.stringify(val));
}
function getItems(type: string){
  const info: string| null = localStorage.getItem(type);
  const val = (info ? JSON.parse(info): []);
  return val;
}

export {getItems, addItem, deleteItem};
