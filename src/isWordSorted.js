export const isWordSorted = (str) => {
  var string = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var checkAscending = 1;
  var checkDescending = 1;
  for (var i = 0; i < (string.length - 1); i++){
    if (string[i + 1] > string[i]){
      checkAscending++;
    }else if(string[i + 1] < string[i]){
      checkDescending++;
    }else if(string[i + 1] == string[i]){
      checkAscending++;
      checkDescending++;
    }
  }
  return (checkDescending == string.length || checkAscending == string.length);
};
