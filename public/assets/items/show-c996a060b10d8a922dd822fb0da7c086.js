jQuery(function(a){var b=function(b){a(":text").val("");var d=a(document.createElement("tr"));d.attr("id","account_"+b._id),a("#tax").html(b.item_tax+b.unit),a(".total_with_tax").html(b.item_total_with_tax+b.unit);var e=["content","price"];for(n=0;n<e.length;n++){var f=a(document.createElement("td")),g=e[n];g=="price"&&(f.css("text-align","right"),b[g]=b[g]+b.unit),f.html(b[g]),d.append(f)}f=a(document.createElement("td"));var h=a(document.createElement("a")),i=[location.pathname,"accounts",b._id].join("/");h.attr({href:i,"data-method":"delete","data-remote":"true",rel:"nofollow"}),h.html("[削除]"),h.bind("ajax:success",c),f.append(h),d.append(f),a("#tax_row").before(d),d.hide(),d.fadeIn("slow")};a("#account_submit").click(function(){var c=a(this);if(c.attr("disabled")=="disabled")return!1;c.attr("disabled","disabled"),a(".alert").html(""),a("#ajax_loader").show();var d=a("#new_account");return a.ajax({url:d.attr("action"),type:"POST",data:d.serialize(),success:b,error:function(b){var c={price:"価格",content:"内容"},d=a.parseJSON(b.responseText);for(k in d)a("#"+k+"_error").html(""+d[k])},complete:function(){a("#ajax_loader").hide(),c.removeAttr("disabled")}}),!1});var c=function(b,c){a("#tax").html(c.item_tax+c.unit),a(".total_with_tax").html(c.item_total_with_tax+c.unit);var d=this.href.split("/").pop(),e=a("#account_"+d);e.fadeOut("slow",function(){e.remove()})};a("a[data-method=delete]").bind("ajax:success",c),a("#item_state").change(function(){if(!confirm(t.confirm_state_change)){this.form.reset();return}this.form.submit()})})