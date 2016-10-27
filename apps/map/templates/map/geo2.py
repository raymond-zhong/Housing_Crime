from geopy.geocoders import Nominatim

geolocator = Nominatim()

inf = open("home2.json") #name of input file
outf = open("home3.json", 'w') #Name of output file, if geo server stops responding
                               #change 'w' to 'a' and delete

for line in inf:
    if line.find('error') != -1:
        address = line[19:len(line)-3] + ' San Francisco'
        print address
        coord = geolocator.geocode(address)
        try:
            print coord.latitude, coord.longitude
            outf.write('\t\t"x": "' + str(coord.latitude) + '",\n')
            outf.write('\t\t"y": "' + str(coord.longitude) + '",\n')
            outf.write('\t\t"Address": "' + address + '",\n')
        except:
            outf.write('error' + line)
    elif line != '\n':
        outf.write(line)
