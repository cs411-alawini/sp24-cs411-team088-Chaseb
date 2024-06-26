$(function() {
  var form = layui.form

  form.verify({
    pwd: [/^[\S]{6,12}$/, 'The password must contain 6 to 12 characters and no Spaces'],
    samePwd: function(value) {
      if (value === $('[name=oldPwd]').val()) {
        return 'The old and new passwords cannot be the same!'
      }
    },
    rePwd: function(value) {
      if (value !== $('[name=newPwd]').val()) {
        return 'The two passwords are inconsistent!'
      }
    }
  })

  $('.layui-form').on('submit', function(e) {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: '/my/updatepwd',
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg('Password update failed!')
        }
        layui.layer.msg('Password updated successfully!')
        // Reset form
        $('.layui-form')[0].reset()
      }
    })
  })
})
