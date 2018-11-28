package com.targetmvd;

import android.support.annotation.Nullable;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.airbnb.android.react.maps.MapsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
     @Override
     public boolean isDebug() {
          return BuildConfig.DEBUG;
     }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
           new ReactNativeConfigPackage(),
           new VectorIconsPackage(),
           new MapsPackage()
        );
    }

    @Nullable
    @Override
    public String getJSMainModuleName() {
      return "index";
    }
}