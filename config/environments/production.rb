Anmitsu::Application.configure do
  config.cache_classes = true
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true
  config.serve_static_assets = false
  config.assets.compress = true
  config.assets.compile = false
  config.assets.digest = true
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true
  # config.action_controller.asset_host = "http://assets.example.com"
  config.i18n.fallbacks = true
  config.active_support.deprecation = :notify
  config.action_mailer.default_url_options = { :host => 'anmitsu.heroku.com' }
end
