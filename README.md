Turnstiled
==========

Turnstiled makes it easy to add the Cloudflare Turnstile Captcha to your Rails app.

For development, it even inlucdes a Mock widget.

Getting Usage
-------------

### Installation

First install the gem by adding this line to your application's Gemfile:

``` ruby
gem "turnstiled"
```

And executing:

``` bash
$ bundle
```

### Configuration

Create a file called `config/initializers/turnstiled.rb` and add the following:

``` ruby
Turnstiled.configure do |config|
  config.api_key = "YOUR_API_KEY"
  config.api_secret = "YOUR_API_SECRET"
end
```

In your layout, add the widget to the head of the document:

``` erb
<%= turnstiled_javascript_tag %>
```

In test and development, it will include a mock widget that fires the callback after 2 seconds.

The mock widget will send the `cf-turnstile-response` parameter with a value of `1`.

In your controller, you also need to verify the response with the following:

``` ruby
class PostsController < ApplicationController
  verify_turnstile_requwst only: %i[create]
end
```

The `verify_turnstile_requwst` takes the same options as a `before_action` method call.
