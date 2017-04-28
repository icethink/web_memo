import { Template } from 'meteor/templating';
import { Memos } from '../../../api/memos.js';
import { Random } from 'meteor/random';
import './home.html';

var is_saved = false;
var memo_obj = {};

Template.App_home.helpers({

    memo(){
        var param = Template.currentData().params().param;

        memo_obj.text = "";
        memo_obj.param = Random.id();
        memo_obj.create_at = new Date();
        if (param !== undefined){
            var memo = Memos.find({"param":param});
            if (memo.count() === 0){
                BlazeLayout.render('App_body', { main: 'App_notFound' });
                exit;
            } else {
                // TODO:あるときの処理
                 console.log(memo);
            }
        }
        return memo_obj;
    }
  ,
});



Template.App_home.events({
    "click #to_share": function(event, template){
         is_saved = true;
         var text = Template.instance().$("#text").val();
         memo_obj.text = text;
         memo_obj.create_at = new Date();

         console.log(memo_obj);
         Memos.insert(memo_obj);
    }
});


Memos.allow({
  insert: function (userId, doc) {
    return true;
  }
})
