require 'test_helper'

class Users::SessionsControllerTest < ActionController::TestCase
  context "on POST :create" do
    setup do
      @user = Factory(:user)
      @user.confirm!
      request.env['devise.mapping'] = Devise.mappings[:user]
      post :create, :user => {:email => @user.email, :password => 'password'}
    end
    should "redirect" do
      assert_redirected_to items_path
    end
    should "assign user" do
      assert_equal @user.id, request.session['warden.user.user.key'][1].first
    end
  end
end