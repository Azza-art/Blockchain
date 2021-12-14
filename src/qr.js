qrId = document.getElementById('fid');
qrName = document.getElementById('fname');
qrLocation = document.getElementById('loc');
qrCrop = document.getElementById('crop');
qrPhone = document.getElementById('contact');
qrQuantity = document.getElementById('quantity');
qrPrice = document.getElementById('exprice');
qrlot = document.getElementById('lotno');
qrgrade = document.getElementById('grade');
qrmrp = document.getElementById('mrp');
qrtestdate = document.getElementById('testdate');
qrexpdate = document.getElementById('expdate');

const qrCode = new QRCodeStyling({
  width: 150,
  height: 150,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrId = () => {
  newQrData = "Farmer ID: "+qrId.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrName = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value;
    qrCode.update({
      data: newQrData
    });
 };
const updateQrLoc = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value;
    qrCode.update({
      data: newQrData
    });
};
const updateQrCrop = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrCont = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+qrPhone.value;
    qrCode.update({
      data: newQrData
    });
  };

  const updateQrQuant = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrExpr = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value;
    qrCode.update({
      data: newQrData
    });
  };

  
  const updateQrLotn = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value+"\n"+"Lot number :"+qrlot.value;
    qrCode.update({
      data: newQrData
    });
  };

 
  const updateQrGrade = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value+"\n"+"Lot number :"+qrlot.value+"\n"+"Grade :"+qrgrade.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrMRP = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value+"\n"+"Lot number :"+qrlot.value+"\n"+"Grade :"+qrgrade.value+"\n"+" MRP: "+qrmrp.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrTestDate = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+"Farmer Phone :"+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value+"\n"+"Lot number :"+qrlot.value+"\n"+"Grade :"+qrgrade.value+"\n"+" MRP: "+qrmrp.value+"\n"+"Test Date :"+qrtestdate.value;
    qrCode.update({
      data: newQrData
    });
  };
  const updateQrExpDate = () => {
    newQrData = "Farmer ID: "+qrId.value+"\n"+"Farmer Name: "+qrName.value+"\n"+"Location: "+qrLocation.value+"\n"+"Cropp Name: "+qrCrop.value+"\n"
    +"Farmer Phone: "+qrPhone.value+"\n"+"Quantity :"+qrQuantity.value+"\n"+"Price :"+qrPrice.value+"\n"+"Lot number :"+qrlot.value+"\n"+"Grade :"+qrgrade.value+"\n"+" MRP: "+qrmrp.value+"\n"+"Test Date :"+qrtestdate.value+"\n"+"Expiry Date :"+qrexpdate.value;
    qrCode.update({
      data: newQrData
    });
  };
 







const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));