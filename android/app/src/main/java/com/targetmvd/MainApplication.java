package com.targetmvd;

import android.support.annotation.Nullable;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.airbnb.android.react.maps.MapsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
     @Override
     public boolean isDebug() {
        return BuildConfig.DEBUG;
     }

    private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

    protected static CallbackManager getCallbackManager() {
        return mCallbackManager;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
           new ReactNativeConfigPackage(),
           new VectorIconsPackage(),
           new FBSDKPackage(mCallbackManager),
           new MapsPackage()
        );
    }

    @Nullable
    @Override
    public String getJSMainModuleName() {
      return "index";
    }
}
