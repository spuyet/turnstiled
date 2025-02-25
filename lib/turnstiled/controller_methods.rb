# frozen_string_literal: true

module Turnstiled
  module ControllerMethods
    extend ActiveSupport::Concern

    class_methods do
      def verify_turnstile_request(**)
        before_action(:verify_turnstile_request, **)
      end
    end

    def verify_turnstile_request
      head :bad_request unless Turnstiled.verify(request)
    end
  end
end
