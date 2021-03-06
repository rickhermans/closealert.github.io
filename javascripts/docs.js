(function($) {
  var id = 'YOUR_ID';
  $(document).ready(function() {

    // Read id from hash
    if(document.location.hash && document.location.hash.indexOf('id=')!==-1) {
      id = document.location.hash.split('id=')[1];
      $('#setting-id').val(id);
    }

    function updateSetting(settingInputElementId, value) {
      if(typeof value=='undefined') {
        value = $('#'+settingInputElementId).val();
      }

      $('#'+settingInputElementId+'-output').show();
      if(value!=='default')
        $('#'+settingInputElementId+'-output').html("\n__clslrt.setting('"+settingInputElementId.replace('setting-','')+"', " + (value!=='true' ? "'"+value+"'" : value)+");");
      else
        $('#'+settingInputElementId+'-output').hide();
    }

    $('form#customize :input').on('change', function() {
      updateSetting($(this).attr('id'), $(this).val());
    });

    updateSetting('setting-id');
    updateSetting('setting-icons');
    updateSetting('setting-language');
    updateSetting('setting-position');
    updateSetting('setting-noemail');
  });
})(jQuery);