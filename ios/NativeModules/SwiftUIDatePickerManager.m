//
//  SwiftUIDatePickerManager.m
//  Veygo
//
//  Created by Tom Fullylove on 30/01/2022.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"
#import "React/RCTComponentEvent.h"
#import "Veygo-Swift.h"

@interface SwiftUIDatePickerManager : RCTViewManager
@end

@implementation SwiftUIDatePickerManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  SwiftUIDatePickerProxy *proxy = [[SwiftUIDatePickerProxy alloc] init];
  UIView *view = [proxy view];
  NSMutableDictionary *storage = [SwiftUIDatePickerProxy storage];
  storage[[NSValue valueWithNonretainedObject:view]] = proxy;
  return view;
}

@end
