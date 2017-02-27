
Module["sum_c"] = function(uintArray){
  return Module.ccall('sum', 'number',['array','number'], [uint8Array.buffer, uint8Array.length]);
};
