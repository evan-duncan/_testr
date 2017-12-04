import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system-redux';
import { connect } from 'react-redux';

export class Notifications extends Component {
    render() {
        const { notifications } = this.props;
        const backgroundColor = '#fff';
        const style = {
            NotificationItem: { // Override the notification item
              DefaultStyle: { // Applied to every notification, regardless of the notification level
                minHeight: '5rem',
                width: '95%',
                borderRadius: '2px',
                padding: '15px 12px',
              },
              success: { // Applied only to the success notification item
                backgroundColor,
              },
              info: {
                backgroundColor,
              },
              error: {
                backgroundColor,
              },
              warning: {
                backgroundColor,
              },
            },
            Dismiss: {
                DefaultStyle : {
                    backgroundColor: '#aaa',
                },
                success: {},
                info: {},
                error: {},
                warning: {},
            }
          };
        return <NotificationSystem notifications={notifications} style={style} />
    }
}

export default connect(state => ({ 
  notifications: state.notifications,
}))(Notifications);
