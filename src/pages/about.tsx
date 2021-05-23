import React from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import styled from 'styled-components'

const AboutContainer = styled.div`
    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

const About: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Sobre - HeadlinesBrasil</title>
            </Head>
            <Container>
                <Header />
                <AboutContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna. Suspendisse potenti nullam ac tortor vitae purus faucibus. Posuere morbi leo urna molestie at elementum eu facilisis. Donec massa sapien faucibus et molestie. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Amet cursus sit amet dictum sit amet justo. Tellus cras adipiscing enim eu turpis egestas pretium. Aliquet sagittis id consectetur purus ut faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Natoque penatibus et magnis dis parturient montes nascetur. Aliquam sem et tortor consequat id. Eu lobortis elementum nibh tellus molestie nunc non. Hac habitasse platea dictumst quisque sagittis purus sit amet. Neque egestas congue quisque egestas diam in arcu. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Gravida in fermentum et sollicitudin ac. Quis imperdiet massa tincidunt nunc pulvinar sapien et.</p>
                    <p>Morbi quis commodo odio aenean sed adipiscing diam. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Odio tempor orci dapibus ultrices. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Laoreet sit amet cursus sit. Ac ut consequat semper viverra. Nullam non nisi est sit amet facilisis magna. Platea dictumst quisque sagittis purus. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Quam vulputate dignissim suspendisse in est ante in nibh mauris.</p>
                    <p>Nunc sed blandit libero volutpat sed cras. Volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis. Integer enim neque volutpat ac tincidunt vitae semper. Vehicula ipsum a arcu cursus vitae. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Tempor orci dapibus ultrices in. Ac turpis egestas sed tempus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tempus urna et pharetra pharetra massa massa ultricies. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Dolor purus non enim praesent. Mi sit amet mauris commodo. Morbi tristique senectus et netus et malesuada fames ac. Viverra maecenas accumsan lacus vel facilisis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Elementum integer enim neque volutpat ac tincidunt vitae. Condimentum mattis pellentesque id nibh tortor. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Diam vel quam elementum pulvinar.</p>
                    <p>Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Enim neque volutpat ac tincidunt vitae semper. Vivamus arcu felis bibendum ut. Diam maecenas sed enim ut sem viverra. Semper quis lectus nulla at. Turpis egestas maecenas pharetra convallis posuere. Id semper risus in hendrerit gravida rutrum quisque non. Penatibus et magnis dis parturient montes nascetur. Maecenas sed enim ut sem viverra aliquet eget sit. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor elit sed vulputate mi sit. Augue eget arcu dictum varius duis at consectetur lorem donec.</p>
                    <p>Ultrices sagittis orci a scelerisque purus semper eget. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Habitant morbi tristique senectus et netus et malesuada fames ac. Scelerisque in dictum non consectetur a erat nam at. A scelerisque purus semper eget duis. Nec nam aliquam sem et tortor consequat id porta. Sem et tortor consequat id porta nibh. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Cursus vitae congue mauris rhoncus aenean. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. A diam maecenas sed enim ut. Euismod quis viverra nibh cras. Mauris ultrices eros in cursus turpis massa tincidunt dui. Posuere ac ut consequat semper viverra. Ac tortor vitae purus faucibus. Vitae turpis massa sed elementum. Erat imperdiet sed euismod nisi porta. Varius quam quisque id diam vel quam. Luctus venenatis lectus magna fringilla.</p>
                </AboutContainer>

            </Container>
        </div>
    )
}

export default About
