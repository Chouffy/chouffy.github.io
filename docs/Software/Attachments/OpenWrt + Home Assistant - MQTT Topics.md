Is a [[YAML]] page about using [[OpenWrt]] data in [[Home Assistant]] using [[MQTT]]. 
Source: [OpenWRT Metrics & Automations with Home Assistant - Jon Brito](https://jonbrito.dev/articles/openwrt-mqtt-ha)

```yaml
# OpenWRT collectd
mqtt:
    sensor:
        
        ## System
        - name: OpenWrt RAM Free
          state_topic: collectd/openwrt/memory/percent-free
          unit_of_measurement: "%"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | float | round(2) }}"
          unique_id: openwrt_ram_free
          
        - name: OpenWrt CPU Active
          state_topic: collectd/openwrt/cpu/percent-active
          unit_of_measurement: "%"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | float | round(2) }}"
          unique_id: openwrt_cpu_active
          
        ## Network
        
        ### WAN
        - name: OpenWrt WAN TX Mbits
          unique_id: openwrt_wan_tx_transfer
          state_topic: collectd/openwrt/interface-wan/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WAN RX Mbits
          unique_id: openwrt_wan_rx_transfer
          state_topic: collectd/openwrt/interface-wan/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WAN Packets
          unique_id: openwrt_wan_packet
          state_topic: collectd/openwrt/interface-wan/if_packets
          unit_of_measurement: "packets/s"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"
        - name: OpenWrt WAN Errors
          unique_id: openwrt_wan_error
          state_topic: collectd/openwrt/interface-wan/if_errors
          unit_of_measurement: "packets"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"
        - name: OpenWrt WAN Dropped
          unique_id: openwrt_wan_dropped
          state_topic: collectd/openwrt/interface-wan/if_dropped
          unit_of_measurement: "packets"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"

        ### LAN
        - name: OpenWrt LAN TX Mbits
          unique_id: openwrt_lan_tx_transfer
          state_topic: collectd/openwrt/interface-br-lan/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt LAN RX Mbits
          unique_id: openwrt_lan_rx_transfer
          state_topic: collectd/openwrt/interface-br-lan/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt LAN Packets
          unique_id: openwrt_lan_packet
          state_topic: collectd/openwrt/interface-br-lan/if_packets
          unit_of_measurement: "packets/s"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"
        - name: OpenWrt LAN Errors
          unique_id: openwrt_lan_error
          state_topic: collectd/openwrt/interface-br-lan/if_errors
          unit_of_measurement: "packets"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"
        - name: OpenWrt LAN Dropped
          unique_id: openwrt_lan_dropped
          state_topic: collectd/openwrt/interface-br-lan/if_dropped
          unit_of_measurement: "packets"
          value_template: "{{ value.split(':')[1] | int + value.split(':')[2].split('\x00')[0] | int }}"
          
          
        ## Wireless
        
        ### Pineapple + Coconut 5 Ghz
        - name: OpenWrt WLAN Main 5Ghz Station
          unique_id: openwrt_wlan_main5_station
          state_topic: collectd/openwrt/iwinfo-wl1-ap0/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main 5Ghz Station
          unique_id: openwrt_wlan_main5_station
          state_topic: collectd/openwrt/iwinfo-wl1-ap0/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main 5Ghz TX Mbits
          unique_id: openwrt_wlan_main5_tx_transfer
          state_topic: collectd/openwrt/interface-wl1-ap0/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WLAN Main 5Ghz RX Mbits
          unique_id: openwrt_wlan_main5_rx_transfer
          state_topic: collectd/openwrt/interface-wl1-ap0/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"
          
        ### Pineapple + Coconut 2.4 Ghz
        - name: OpenWrt WLAN Main 2.4Ghz Station
          unique_id: openwrt_wlan_main24_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap0/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main 2.4Ghz Station
          unique_id: openwrt_wlan_main24_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap0/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main 2.4Ghz TX Mbits
          unique_id: openwrt_wlan_main24_tx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap0/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WLAN Main 2.4Ghz RX Mbits
          unique_id: openwrt_wlan_main24_rx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap0/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"
          
        ### Gili Air (Guests)
        - name: OpenWrt WLAN Main Guest Station
          unique_id: openwrt_wlan_guest_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap1/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main Guest Station
          unique_id: openwrt_wlan_guest_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap1/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main Guest TX Mbits
          unique_id: openwrt_wlan_guest_tx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap1/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WLAN Main Guest RX Mbits
          unique_id: openwrt_wlan_guest_rx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap1/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"
          
        ### iot_local
        - name: OpenWrt WLAN Main IoT Station
          unique_id: openwrt_wlan_iot_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap2/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main IoT Station
          unique_id: openwrt_wlan_iot_station
          state_topic: collectd/openwrt/iwinfo-wl0-ap2/stations
          unit_of_measurement: "station"
          value_template: "{{ value.split(':')[1].split('\x00')[0] | int }}"
        - name: OpenWrt WLAN Main IoT TX Mbits
          unique_id: openwrt_wlan_iot_tx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap2/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[2].split('\x00')[0] | float * 8 / 1048576) | round(3) }}"
        - name: OpenWrt WLAN Main IoT RX Mbits
          unique_id: openwrt_wlan_iot_rx_transfer
          state_topic: collectd/openwrt/interface-wl0-ap2/if_octets
          unit_of_measurement: "Mbit/s"
          value_template: "{{ (value.split(':')[1] | float * 8 / 1048576) | round(3) }}"

```