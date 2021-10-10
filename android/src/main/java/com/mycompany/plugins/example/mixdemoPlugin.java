package com.mycompany.plugins.example;


import androidx.appcompat.app.AppCompatActivity;

import com.airbnk.sdk.callback.IConnectDeviceCallback;
import com.airbnk.sdk.callback.IDeviceStatusCallback;
import com.airbnk.sdk.callback.IUnlockCallback;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.airbnk.sdk.MainApi;

class Api extends AppCompatActivity {
}

@CapacitorPlugin(name = "mixdemo")
public class mixdemoPlugin extends Plugin {
  private String snInfo;
  private String key;
  private com.airbnk.sdk.MainApi mainApi;

  private mixdemo implementation = new mixdemo();

  @PluginMethod()
  public void unlock(PluginCall call) {
    Api api = new Api();
    mainApi = new MainApi(api, snInfo, key);
    mainApi.connect(new IConnectDeviceCallback() {
      @Override
      public void onSuccess() {
        mainApi.unlock(snInfo, new IUnlockCallback() {
          @Override
          public void onSuccess() {
            //unlocked
            String value = call.getString("open");
            JSObject ret = new JSObject();
            ret.put("open", implementation.echo(value));
            call.resolve(ret);
            mainApi.disconnect();
          }

          @Override
          public void onFailed(String errorMsg) {
          }
        });
      }

      @Override
      public void onFailed(String errorMsg) {
        //failed
        String value = call.getString("failed");
        JSObject ret = new JSObject();
        ret.put("failed", implementation.echo(value));
        call.resolve(ret);
      }
    }, new IDeviceStatusCallback() {
      @Override
      public void states(int i) {
      }
    });

    call.resolve();
  }
}
