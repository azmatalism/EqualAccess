import React from 'react';
import {
  Home,
  Services,
  News,
  Contact,
  PoliciesLaw,
  Covid,
  AboutApp,
  Humanitarian,
} from '../screens/screens';
import {COLORS, globalFont, ICONS, ROUTES} from '../constants/constant';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/drawerContent/DrawerContent';
import {useAppContext} from '../theme/AppContext';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

// function DrawerNavigation() {
//   const {t} = useTranslation();
//   const {fontSize} = useAppContext();
//   const {colors} = useTheme();
//   const font = globalFont();
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: COLORS.lightBlue,
//         drawerActiveTintColor: COLORS.blue,
//         drawerInactiveTintColor: COLORS.black,
//         drawerStyle: {
//           borderTopRightRadius: 26,
//           borderBottomRightRadius: 26,
//           width: '68%',
//         },
//         drawerItemStyle: {
//           marginVertical: 1,
//           borderRadius: 8,
//         },
//         drawerLabelStyle: {
//           fontSize,
//           color: colors.text,
//         },
//       }}>
//       <Drawer.Screen
//         name={ROUTES.HOME_DRAWER}
//         component={Home}
//         options={{
//           title: t('dashboard'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="home-sharp"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.SERVICES_DRAWER}
//         component={Services}
//         options={{
//           title: t('service'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="cube-outline"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.POLICIES_DRAWER}
//         component={PoliciesLaw}
//         options={{
//           title: t('policies_laws'),
//           drawerIcon: () => (
//             <ICONS
//               // iconFamily="ionicons"
//               name="shield-search"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.COVID_DRAWER}
//         component={Covid}
//         options={{
//           title: t('covid_19'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="fontAwesone6"
//               name="virus-covid"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.HUMANITARIAN_DRAWER}
//         component={Humanitarian}
//         options={{
//           title: t('humanitarian_assistance'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="bag-add-sharp"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.NEWS_DRAWER}
//         component={News}
//         options={{
//           title: t('news_updates'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="document-text-outline"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.CONTACT_DRAWER}
//         component={Contact}
//         options={{
//           title: t('contact_us'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="chatbox-outline"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name={ROUTES.ABOUT_DRAWER}
//         component={AboutApp}
//         options={{
//           title: t('about_app'),
//           drawerIcon: () => (
//             <ICONS
//               iconFamily="ionicons"
//               name="information-circle-outline"
//               size={22}
//               color={colors.text}
//             />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
// export default DrawerNavigation;

function DrawerNavigation() {
  const {t} = useTranslation();
  const {fontSize} = useAppContext();
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.lightBlue,
        drawerActiveTintColor: COLORS.blue,
        drawerInactiveTintColor: colors.text,
        drawerStyle: {
          borderTopRightRadius: 26,
          borderBottomRightRadius: 26,
          width: '68%',
        },
        drawerItemStyle: {
          marginVertical: 1,
          borderRadius: 8,
        },
        drawerLabelStyle: {
          fontSize,
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={Home}
        options={{
          title: t('dashboard'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="home-sharp"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.SERVICES_DRAWER}
        component={Services}
        options={{
          title: t('service'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="cube-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.POLICIES_DRAWER}
        component={PoliciesLaw}
        options={{
          title: t('policies_laws'),
          drawerIcon: ({color}) => (
            <ICONS name="shield-search" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.COVID_DRAWER}
        component={Covid}
        options={{
          title: t('covid_19'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="fontAwesone6"
              name="virus-covid"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.HUMANITARIAN_DRAWER}
        component={Humanitarian}
        options={{
          title: t('humanitarian_assistance'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="bag-add-sharp"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NEWS_DRAWER}
        component={News}
        options={{
          title: t('news_updates'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="document-text-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CONTACT_DRAWER}
        component={Contact}
        options={{
          title: t('contact_us'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="chatbox-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.ABOUT_DRAWER}
        component={AboutApp}
        options={{
          title: t('about_app'),
          drawerIcon: ({color}) => (
            <ICONS
              iconFamily="ionicons"
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
