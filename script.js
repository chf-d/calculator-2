let val1 = "";
let oper = 0;
let val2 = "";

function but_val(Bval) {

  if (val1 == "") {
    val1 = Bval;
    document.getElementById("input").value = val1;
  }
  else if (oper == 0) {
    val1 += Bval;
    document.getElementById("input").value = val1;
  }
  else if (val2 == "") {
    val2 = Bval;
    document.getElementById("input").value = val2;
  }
  else {
    val2 += Bval;
    document.getElementById("input").value = val2;
  }
}

function oper_val(Oval) {

  if (val1 != '') {
    if (val1 != '' && val2 !== '') {
      calcula()
      val1 = document.getElementById("input").value;
    }
    else {
      document.getElementById("res_show").innerHTML = '';
    }
    oper = Oval;
    document.getElementById("res_show").innerHTML += val1 + oper;
    document.getElementById("input").value = "";
  }
  else if (document.getElementById("input").value != '') {
    val1 = document.getElementById("input").value;
    oper = Oval;
    document.getElementById("res_show").innerHTML += val1 + oper;
    document.getElementById("input").value = "";
  }
}

function clear_all() {

  document.getElementById("input").value = "";
  document.getElementById("res_show").innerHTML = "";
  val1 = "";
  oper = 0;
  val2 = "";
}

function clear_input() {

  document.getElementById("input").value = "";

  if (oper == 0) {
    val1 = "";
  } else if (oper != 0) {
    val2 = "";
  }
}

function pos_neg() {

  if (val1 == '' && oper == 0 && val2 == '') {
    debugger
    let input_val = document.getElementById('input').value;

    if (input_val.indexOf('-') == -1) {
      input_val = '-' + input_val;
    }
    else {
      val1 = input_val.replace('-', '');
    }
    val1 = input_val;
    document.getElementById("input").value = val1;
  }

  else if (oper == 0) {

    if (val1.indexOf('-') == -1) {
      val1 = '-' + val1;
    }
    else {
      val1 = val1.replace('-', '');
    }

    document.getElementById("input").value = val1;
  }
  else {

    if (val2.indexOf('-') == -1) {
      val2 = '-' + val2;
    }
    else {
      val2 = val2.replace('-', '');
    }
    document.getElementById("input").value = val2;
  }
}

function point() {

  if (document.getElementById("input").value == '') {
    if (val1 == '') {
      val1 = '0.';
      document.getElementById("input").value = val1;
    }
    else {
      val2 = '0.';
      document.getElementById("input").value = val2;
    }

  }
  else {
    but_val('.');
  }
}

function calcula() {

  let par1 = Number(val1);
  let par2 = Number(val2);


  if (val1 != "" && oper != 0 && val2 != "") {

    document.getElementById("res_show").innerHTML = val1 + oper + val2 + '=';

    if (par1 == 0 || par2 == 0) {
      document.getElementById("input").value = "error";
    }
    else if (oper == "+") {
      (document.getElementById("input").value = par1 + par2);
    }
    else if (oper == "-") {
      (document.getElementById("input").value = par1 - par2);
    }
    else if (oper == "x") {
      (document.getElementById("input").value = par1 * par2);
    }
    else if (oper == "÷") {
      (document.getElementById("input").value = par1 / par2);
    }
    else if (oper == "%") {
      (document.getElementById("input").value = par1 % par2);
    }

    val1 = "";
    oper = 0;
    val2 = "";
  }
}
