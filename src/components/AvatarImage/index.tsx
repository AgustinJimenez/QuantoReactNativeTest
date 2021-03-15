import React from 'react'
import { View, Image } from 'react-native'
import { scale } from '../../styles'
import styles from './styles'

const defaultSize: number = scale(1.2)
const defaultImageCoveragePercentage: number = 87

const AvatarImage = ({ uri, size = defaultSize, image_coverage_percentage = defaultImageCoveragePercentage }: any) => {
  return (
    <View
      style={[
        styles.userListItemAvatarImageContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {!!uri && (
        <Image
          source={{ uri }}
          style={{ borderRadius: size / 2, width: `${image_coverage_percentage}%`, height: `${image_coverage_percentage}%` }}
          resizeMode='contain'
        />
      )}
    </View>
  )
}
export default AvatarImage
