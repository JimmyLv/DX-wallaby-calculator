import initCalculator from '../src/calculatorView'
import calculatorTemplate from './helper/template'

describe('calculator view', function() {

  beforeEach(function() {
    $('body').append("<div id=\"calculator\"/>");
    $('#calculator').html(calculatorTemplate);
    initCalculator();
  });

  afterEach(function() {
    $('#calculator').remove();
  });

  it('should add numbers', function() {

    console.log(window.document.body.clientHeight);

    $('#7').click();
    $('#plus').click();
    $('#9').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('16');
  });

  it('should divide numbers', function() {
    $('#6').click();
    $('#divide').click();
    $('#3').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('2');
  });

  it('should multiply numbers', function() {
    $('#7').click();
    $('#multiply').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('56');
  });

  it('should subtract numbers', function() {
    $('#7').click();
    $('#minus').click();
    $('#8').click();
    $('#eval').click();

    expect($('.screen').text()).toBe('-1');
  });
});